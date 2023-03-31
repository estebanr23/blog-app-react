import { Layout } from '../layouts/layout';
import { ArticleView } from '../views/ArticleView';
import { NothingSelectedArticle } from '../views/NothingSelectedArticle';

export const HomePage = () => {
    const article = false;
  return (
    <Layout>
      {
        (article)
        ? <ArticleView />
        : <NothingSelectedArticle />
      }
    </Layout>
  )
}
