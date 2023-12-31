import { GridItemStyle } from '../GridItem'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { PreLoaderStyle } from '../PreLoader/PreLoader'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}
const Article = ({ children, title = 'Homepage' }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Leo Rodriguez</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
)

export default Article