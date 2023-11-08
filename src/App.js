import {Directory} from "./components/directory/directory.component";
import {categories} from "./components/directory/categories";

const App = () => {
    return (
        <Directory categories={categories}/>
    )
}

export default App;