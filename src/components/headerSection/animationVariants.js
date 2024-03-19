const dashBoardVariant = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            when: 'beforeChildren',
            staggerChildren: 0.4
        }
    }
};

export { dashBoardVariant };