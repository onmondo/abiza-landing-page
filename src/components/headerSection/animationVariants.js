const dashBoardVariant = {
    hidden: {
        scale: 0.6,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            when: 'beforeChildren',
            staggerChildren: 0.4
        }
    }
};

export { dashBoardVariant };