export default function App() {

    return (
        <div className="full-page">

            <header className="header">
                <img className="logo" src="./images/logo.png" alt="" />
            </header>

            <main className="main">

                <details>
                    <summary>Özel Dürümler</summary>
                    <ul>
                        <li>Özel Soslu Tavuk Dürüm <span>130₺</span></li>
                        <li>Meksika Soslu Tavuk Dürüm <span>130₺</span></li>
                        <li>Cheddar Soslu Tavuk Dürüm <span>130₺</span></li>
                        <li>Köfte Dürüm <span>170₺</span></li>
                        <li>Kumru Dürüm <span>130₺</span></li>
                    </ul>
                </details>

                <details>
                    <summary>Burger Menüler</summary>
                    <ul>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> 4'lü Doyuran Menü</summary>
                                <p>4 Chicken Burger + Mega Boy Patates + 1 L İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>360₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> İyi Doyduk Menü</summary>
                                <p>2 Chicken Burger + 2 Köfte Burger + Mega Boy Patates + 1 L İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>380₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> Hepsinden Olsun Menü</summary>
                                <p>Çiko Tavuk Burger + Chicken Burger + Köfte Burger + Mega Boy Patates + 1 L İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>310₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> 2'li Cheeseburger Menü</summary>
                                <p>2 Cheeseburger + Orta Boy Patates + 1 L İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>360₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> Efsane İkili Menü</summary>
                                <p>2 Köfte Burger + Orta Boy Patates + 1 L İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>370₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> Efsane Üçlü Menü</summary>
                                <p>3 Köfte Burger + Mega Boy Patates + 1 L İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>440₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> Hamburger Menü</summary>
                                <p>Köfte Burger + Küçük Boy Patates + 330 ML İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>290₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> Çocuk Burger Menü</summary>
                                <p>Köfte Burger + Küçük Boy Patates + 330 ML İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>270₺</span>
                        </li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-caret-right"></i> 2'li Tavuk Burger Menü</summary>
                                <p>2 Tavuk Burger + Küçük Boy Patates + 330 ML İçecek + 4'lü Soğan Halkası</p>
                            </details>
                            <span>200₺</span>
                        </li>
                    </ul>
                </details>

                <details>
                    <summary>Gözlemeler</summary>
                    <ul>
                        <li>Patatesli Gözleme <span>95₺</span></li>
                        <li>Peynirli Gözleme <span>95₺</span></li>
                        <li>Kaşarlı Gözleme <span>95₺</span></li>
                        <li>Sucuklu Gözleme <span>100₺</span></li>
                        <li>Sucuklu Kaşarlı Gözleme <span>105₺</span></li>
                    </ul>
                </details>

                <details>
                    <summary>Patsolar</summary>
                    <ul>
                        <li>Sade Patso <span>90₺</span></li>
                        <li>Sosisli Patso <span>110₺</span></li>
                        <li>Sucuklu Patso <span>110₺</span></li>
                        <li>Köfteli Patso <span>160₺</span></li>
                        <li>Patates Tabağı <span>90₺</span></li>

                    </ul>
                </details>

                <details>
                    <summary>Tostlar</summary>
                    <ul>
                        <li>Kaşarlı Tost <span>90₺</span></li>
                        <li>Sucuklu Tost <span>90₺</span></li>
                        <li>Karışık Tost <span>100₺</span></li>
                        <li>Kavurmalı Tost <span>160₺</span></li>
                    </ul>
                </details>

                <details>
                    <summary>Makarnalar</summary>
                    <ul>
                        <li>Kremalı Tavuklu Makarna <span>160₺</span></li>
                        <li>Köri Soslu Tavuklu Makarna <span>160₺</span></li>
                        <li>Acılı Kremalı Tavuklu Makarna <span>160₺</span></li>
                        <li>Soya Soslu Tavuklu Makarna <span>160₺</span></li>
                        <li>Fettuccine Alfredo <span>190₺</span></li>
                    </ul>
                </details>

                <details>
                    <summary>Pilav Çeşitleri</summary>
                    <ul>
                        <li>Nohutlu Pilav <span>120₺</span></li>
                        <li>Nohutlu Tavuklu Pilav <span>140₺</span></li>
                        <li>Köfteli Pilav <span>260₺</span></li>
                        <li>Arnavut Ciğerli Pilav <span>190₺</span></li>
                        <li>Kavurmalı Pilav <span>260₺</span></li>
                        <li>Tavuk Soteli Pilav <span>230₺</span></li>
                    </ul>
                </details>

                <details>
                    <summary>Waffle Çeşitleri</summary>
                    <ul>
                        <li>Çilekli Waffle <span>170₺</span></li>
                        <li>Muzlu Waffle <span>170₺</span></li>
                        <li>Full Karışık Waffle <span>170₺</span></li>
                        <li>Frambuazlı Waffle <span>190₺</span></li>
                        <li>Orman Meyveli Waffle <span>190₺</span></li>
                    </ul>
                </details>

                <details>
                    <summary>İçecekler</summary>
                    <ul>
                        <li>Coca Cola 330 ml <span>45₺</span></li>
                        <li>Fuse Tea Şeftali 330 ml <span>45₺</span></li>
                        <li>Fuse Tea Limon 330 ml<span>45₺</span></li>
                        <li>Fanta 330 ml<span>45₺</span></li>
                        <li>Sprite 330 ml<span>45₺</span></li>
                        <li>Coca Cola 1 L <span>75₺</span></li>
                        <li>Coca Cola Zero 1 L <span>75₺</span></li>
                        <li>Fuse Tea Limon 1 L<span>75₺</span></li>
                        <li>Fuse Tea Şeftali 1 L <span>75₺</span></li>
                        <li>Fanta 1 L<span>75₺</span></li>
                        <li>Sprite 1 L<span>75₺</span></li>
                    </ul>
                </details>

            </main>

            <footer className="footer">

                <div>
                    <h3>Adres</h3>
                    <p>Mehmet Akif Mahallesi Gül Caddesi No: 18 Sultanbeyli / İstanbul</p>
                </div>

                <div>
                    <h3>Çalışma Saatlerimiz</h3>
                    <p>Her gün 09:00 - 00:00</p>
                </div>

            </footer>

            <div className="developing">
                © 2024 1001FASTFOOD coded by <a href="https://yasiralakus.com.tr/">@yasiralakus</a>
            </div>

        </div>
    )
}