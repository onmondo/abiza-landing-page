const dashBoardVariant = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    }
};

const promoteVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0, opacity: 1,
        transition: { duration: 0.1, type: "tween" }
    },
    hover: {
        scale: 2.8,
        boxShadow: "0px 0px 12px 4px rgb(249, 247, 222)",
        // borderColor: "rgb(131 217 209)",
        transition: {
            duration: 0.1,
            // yoyo: Infinity
        }
    }
}

export { dashBoardVariant, promoteVariant };