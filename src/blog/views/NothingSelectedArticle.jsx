import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Article, Spinner } from "../components"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startLoadingArticles } from '../../store/blog/thunks';
import { useParams } from 'react-router-dom';

export const NothingSelectedArticle = () => {

  const { articles, isLoading, errorMessage } = useSelector( state => state.blog );
  const dispatch = useDispatch();
  const { id } = useParams(); // id del area

  useEffect(() => {
    dispatch( startLoadingArticles( id ) );
  }, [id]);

  return (
    <>
      {
        (isLoading)
        ? (<Spinner/>)
        : (
          <div>
            <div className="flex justify-center gap-4 mb-8">
                <input type="text" className="w-1/3 px-2 rounded-lg" placeholder="Buscar Articulo"/>
                <button className="bg-gray-600 rounded-lg px-4 py-2 text-white hover:cursor-pointer hover:bg-gray-400"><FontAwesomeIcon icon={ faMagnifyingGlass } /> Search</button>
            </div>

            {/* <Article key="1"/>
            <Article key="2"/>
            <Article key="3"/> */}

            {
              (articles.length > 0)
              ?
                articles.map( article => (
                  <Article key={ article.id } article={ article } />
                ))
              : 
                <p className="text-center text-white text-xl">No se encontraron articulos.</p>
            }
          </div>
        )
      }
    </>
  )
}
