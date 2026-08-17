const { execSync } = require('child_process')

// ----------------- CONFIGURATION -----------------
const PROJECT_NAME = 'homestay-abiza'
const DELETE_LIMIT = 50  // Adjust this to your deletion cap
// -------------------------------------------------

console.log('🔍 Fetching project deployment list from Wrangler...')

try {
  // 1. Fetch raw output from Wrangler
  const rawOutput = execSync(`npx wrangler pages deployment list --project-name="${PROJECT_NAME}" --json`, { encoding: 'utf-8' })

  // 2. Identify the active production ID by checking lines
  let activeId = null
  const lines = rawOutput.split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes('"environment": "production"') || lines[i].toLowerCase().includes('"is_active": true')) {
      // Look backward or forward around that block to find the ID string
      const surroundingText = lines.slice(Math.max(0, i-5), i+5).join(' ')
      const match = surroundingText.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)
      if (match) {
        activeId = match[0]
        break
      }
    }
  }

  if (activeId) {
    console.log(`🛡️ Protected active production deployment ID: ${activeId}`)
  } else {
    console.log('⚠️ Could not locate an active production ID. Proceeding with caution.')
  }

  // 3. Extract all valid UUID-formatted deployment IDs using regex matching
  const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi
  const allIdsFound = rawOutput.match(uuidRegex) || []
  
  // Deduplicate strings to ensure we don't try to call the same ID twice
  const uniqueIds = [...new Set(allIdsFound)]

  if (uniqueIds.length === 0) {
    console.log('❌ No deployment IDs found in the response text.')
    process.exit(0)
  }

  console.log(`📊 Found ${uniqueIds.length} unique deployment strings to process.`)

  // 4. Loop through and delete up to the configured limit
  let deletedCount = 0

  for (const id of uniqueIds) {
    if (deletedCount >= DELETE_LIMIT) {
      console.log(`\n✋ Limit of ${DELETE_LIMIT} reached! Stopping.`)
      break
    }

    // Explicit check to skip deleting the active production build (Prevents error 8000034)
    if (id === activeId) {
      console.log(`⏭ Skipping active production deployment: ${id}`)
      continue
    }

    console.log(`🗑️ Deleting deployment (${deletedCount + 1}/${DELETE_LIMIT}): ${id}`)
    
    try {
      execSync(`npx wrangler pages deployment delete --project-name="${PROJECT_NAME}" --force "${id}"`, { stdio: 'ignore' })
      deletedCount++
    } catch (err) {
      console.log(`❌ Failed to delete deployment: ${id}`)
    }
  }

  console.log(`\n🎉 Sequence complete! Total deleted deployments this run: ${deletedCount}`)

} catch (error) {
  console.error('❌ An error occurred running the script:', error.message)
}
