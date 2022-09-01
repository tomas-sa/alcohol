export default function Aside() {
    return (
        <div className="aside">
            <h2 className="header-aside">MEDIDAS GENERALES</h2>
            <div className="lista">
                <div className="drink">
                    <i class="fa-solid fa-whiskey-glass"></i>
                    <h3>Whisky: 60ml</h3>
                </div>
                <div className="drink">
                    <i class="fa-solid fa-wine-glass"></i>
                    <h3>Copa: 415ml</h3>
                </div>
                <div className="drink">
                    <i class="fa-solid fa-beer-mug-empty"></i>
                    <h3>Porron: 470ml</h3>
                </div>
                <div className="drink">
                    <i class="fa-solid fa-wine-bottle"></i>
                    <h3>Botella: 750ml</h3>
                </div>
                <div className="drink">
                    <i class="fa-solid fa-martini-glass"></i>
                    <h3>Coctel: 300ml</h3>
                </div>
            </div>
        </div>
    )
}