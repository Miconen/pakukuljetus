import Button from "../Button/Button";
import Container from "../Container/Container";
import Phone from "../Links/Phone";

function Header() {
    return (
        <header className="bg-header-image bg-cover bg-center text-white">
            <div className="flex justify-center h-full w-full backdrop-brightness-50 bg-gradient-to-l from-blue-500/25 to-blue-500/50">
                <Container className="gap-8 px-4 py-16 md:px-0 md:py-24">
                    <h1 className="font-extrabold leading-none text-4xl md:text-5xl lg:text-6xl w-3/4">Keskity sinä uuteen kotiisi – me muutamme tavarat puolestasi!</h1>
                    <p className="font-bold leading-snug w-3/4">Meidän kanssa muuttosi sujuu helposti. Olemme vuoden 2011 jälkeen auttaneet yli 1000 asiakasta vaihtamaan kotia ilman turhaa stressiä ja selkävaivoja. Muuttopäivänä sinulla riittää joka tapauksessa paljon tekemistä — tavaroiden järjestelyä, siivoamista ja uuteen kotiin tutustumista. Tavaroiden siirtäminen vanhasta kodista uuteen kannattaa jättää ammattilaisille.onger example text with word wrapping.</p>
                    <Button type="Main">Haluan muuttotarjouksen</Button>
                    <div className="flex gap-2 font-bold"><span>Voit myös soittaa</span><Phone call="+358400631118" number="0400 631 118" /></div>
                </Container>
            </div>
        </header>
    );
}

export default Header;
