import styles from "../styles/Home.module.css"
import WithHeader from '../layouts/WithHeader/WithHeader'
import ArticleList from "../components/ArticleList/ArticleList"

function Home() {
  return (
    <ArticleList />
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
