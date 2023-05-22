import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

export const Edit = () => {
    const [ data, setData ] = useState({});

    const saveArticle = () => {
        console.log(data)
    }

  return (
    <div className="App">
        <h2 className="text-center text-white text-4xl mb-4">Using CKEditor 5 build in React</h2>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                setData(data);
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
            
        />

        <button onClick={ saveArticle } className="bg-black text-white px-4 py-2">Guardar</button>

        
    </div>
  )
}
