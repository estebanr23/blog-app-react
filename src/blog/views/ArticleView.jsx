import { useDispatch } from "react-redux";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parse from 'html-react-parser';
import { setArticle } from "../../store/blog/blogSlice";

export const ArticleView = ({ article }) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch( setArticle() );
  }

  return (
    <div className="px-8 md:px-12 lg:max-w-5xl 2xl:max-w-6xl m-auto">
      <div className="text-start">
        <button onClick={ handleBack } className="border rounded-lg border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-1 px-4"><FontAwesomeIcon icon={ faArrowLeft } /> Atras</button>
      </div>

      <h1 className="text-center text-white text-4xl mb-4">{ article.title }</h1>
      <div>
        <img src="src/assets/image-1.jpg" className="block" alt="Imagen de Articulo" />
      </div>

      <div className="text-white text-justify mt-6">
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, labore! Veniam quisquam veritatis 
              omnis quo non, dicta illo. Neque obcaecati vero ipsa laudantium corrupti itaque, fugiat tenetur 
              laborum repellendus ipsam?
            </p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi reiciendis provident odio velit alias perferendis tempore illum, iure libero est, culpa et quis nulla, vitae vel quaerat ut? Sint, dolores.
            Cumque, fugit doloremque! Omnis recusandae cum laborum sed voluptas dolores cupiditate debitis eos, vitae suscipit quasi harum magni sit beatae fugit voluptates aspernatur eaque nobis dicta accusamus qui animi non.
            Hic sapiente officiis ducimus nihil ut sequi, eaque nostrum similique commodi omnis tempora culpa excepturi animi accusantium laudantium temporibus dolores cum voluptate dolore perspiciatis. Cumque voluptatem quos dolorem sed odit.
            Fuga voluptate unde sed! Asperiores ratione non animi hic! Ut minus maiores alias? Ratione officiis nisi cupiditate similique optio quia non, architecto sit assumenda iste enim inventore consectetur, corrupti atque.
            </p> */}
            {
              parse(article.content)
            }
      </div>
    </div>
  )
}
