import Artical from "../artical/Artical";
import Category from "../category/Category";
import Events from "../events/Events";
import Header from "../Header/Header";
import Resources from "../resources/Resources";
import SearchBox from "../searchBox/SearchBox";
const Home = () => {
    return(
        <div>
            <Header />
            <SearchBox />
            <Category />
            <Artical />
            <Resources />
            <Events />
        </div>
    )
}

export default Home;