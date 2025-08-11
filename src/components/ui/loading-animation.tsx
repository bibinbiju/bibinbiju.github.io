import { motion } from "framer-motion";

export default function LoadingAnimation() {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className="fixed inset-0 bg-background/95 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="flex justify-center items-center space-x-2 mb-8"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="w-4 h-4 bg-primary rounded-full"
              variants={circleVariants}
              transition={circleTransition}
            />
          ))}
        </motion.div>
        
        <motion.div
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio...
        </motion.div>
        
        <motion.div
          className="w-64 h-1 bg-muted rounded-full mt-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}