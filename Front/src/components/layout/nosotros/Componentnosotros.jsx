import './nosotros.scss';

const ComponentNosotros = () => {

    return (
    <div className="container__nosotros">
            <p className="nosotros__p">Somos una empresa dedicada a la venta de productos electrónicos de alta calidad, desde computadoras y laptops hasta teléfonos móviles y accesorios.</p>
            <img src={process.env.PUBLIC_URL + "img/stockventas.jpg"} alt="nosotros" className="img__nosotros" />
            <p className="nosotros__p">Nuestra empresa ha estado en el mercado de la tecnología por varios años, y durante todo este tiempo hemos trabajado arduamente para ofrecer productos de calidad a nuestros clientes.
                <br />Nos enorgullece haber construido una reputación sólida y confiable en la industria, y hemos mantenido esta reputación a través de un compromiso constante con la calidad y el servicio al cliente.</p>
            <img src={process.env.PUBLIC_URL + "img/stockventas2.jpeg"} alt="nuestro equipo" className="img__nosotros" />
            <p className="nosotros__p">Nos enfocamos en ofrecer productos de tecnología de vanguardia y trabajamos con las mejores marcas en el mercado para garantizar que nuestros clientes reciban los mejores productos posibles.
                <br />Además, nuestro equipo de expertos en tecnología está siempre disponible para brindar asesoramiento y orientación a nuestros clientes, para que puedan tomar decisiones informadas sobre sus compras.</p>
            <p className="nosotros__p">¡Gracias por elegirnos siempre!</p>
            <img src={process.env.PUBLIC_URL + "img/stockventas3.jpg"} alt="equipo feliz" className="img__nosotros" />
    </div>
    );
}; 

export default ComponentNosotros;