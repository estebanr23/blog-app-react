import { useSelector } from 'react-redux';
import { Layout } from '../layouts/layout';
import { ArticleView } from '../views/ArticleView';
import { NothingSelectedArticle } from '../views/NothingSelectedArticle';

export const HomePage = () => {
    // const activeArticle = false;

    const { activeArticle } = useSelector( state => state.blog );

  return (
    <Layout>
      {
        (activeArticle)
        ? <ArticleView article={ activeArticle } />
        : <NothingSelectedArticle />
      }
    </Layout>
  )
}
