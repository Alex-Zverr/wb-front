import Header from "./Header/Header.tsx";
import Shop from "./Shop/Shop.tsx";

const App = () => (
    <>
        <Header/>
        <main>
            <div className="container">
                <Shop/>
            </div>
        </main>
    </>
);

export default App;
