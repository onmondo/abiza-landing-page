
// const containerVariants = {
//     hidden: {
//         x: '30vw',
//         opacity: 0
//     },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 1,
//             ease: 'easeInOut'
//         }
//     },
//     exit: {
//         x: '30vw',
//         opacity: 0,
//         transition: { duration: 1, ease: 'easeInOut' }
//     }
// }

const listVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            when: 'beforeChildren',
            staggerChildren: 0.4
        }
    }
}

const containerVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.6
        }
    }
}

export { containerVariant, listVariants };