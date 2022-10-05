import styles from "../styles/Home.module.css"
import WithHeader from '../layouts/WithHeader/WithHeader'

function Home() {
  return (
    <div className={styles.container}>
      we have done it lads
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <WithHeader>
      {page}
    </WithHeader>
  )
}

export default Home
