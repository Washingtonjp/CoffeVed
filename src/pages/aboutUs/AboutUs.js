import './AboutUs.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import Paragraph from '../../components/paragraph/Paragraph'

function AboutUs() {
    return (
        <>
            <Header />

            <div className="container" >
                <Title label="Sobre a CoffeeVed" />

                <Paragraph>
                Na CoffeeVed, oferecemos muito mais do que café gourmet. Somos uma cafeteria que celebra experiências únicas, unindo sabores cuidadosamente selecionados a momentos de conexão e prazer. Cada item do nosso cardápio reflete a dedicação em oferecer o melhor da gastronomia artesanal e o cuidado com a origem dos ingredientes que chegam à sua mesa.

                Mais do que uma cafeteria, somos um ponto de encontro para quem valoriza qualidade, sustentabilidade e autenticidade. Trabalhamos lado a lado com pequenos produtores e fornecedores locais, garantindo que cada xícara de café, cada prato e cada sobremesa sejam uma celebração da excelência.

                </Paragraph>


                <h3 className='about2'>Nossa essência está nos detalhes:</h3>
                


                <Paragraph>
                1.Ingredientes de Origem Sustentável: Priorizamos parcerias com produtores que respeitam o meio ambiente e adotam práticas responsáveis, garantindo frescor e sabor únicos em cada preparação.
                </Paragraph>

                <Paragraph>
                2.Menu Exclusivo: Além do café gourmet, você encontra uma seleção de pratos artesanais, sobremesas irresistíveis e bebidas especiais que combinam com qualquer momento do dia.
                </Paragraph>

                <Paragraph>
                3.Compromisso com a Comunidade: Valorizamos o trabalho de pequenos agricultores e artesãos locais, fortalecendo a economia da região e promovendo uma cadeia produtiva mais justa.
                </Paragraph>

                <Paragraph>
                4.Ambiente Inspirador: Nossa cafeteria foi criada para ser um espaço aconchegante e sofisticado, perfeito para um encontro, uma pausa no dia ou para simplesmente apreciar um bom café acompanhado de algo especial.
                </Paragraph>

                <Paragraph>
                Na CoffeeVed, cada detalhe é pensado para transformar sua visita em uma experiência marcante. Descubra novos sabores, celebre bons momentos e sinta-se em casa. Venha nos visitar e deixe-se surpreender! 
                </Paragraph>
                <br /> <br /> <br />
            </div>

            <Footer />
        </>
    )
}
export default AboutUs