import Button from "../../Button/Button";
import Container from "../../Container/Container";
import Phone from "../../Links/Phone";

function CallToAction() {
    return (
        <div className="flex justify-center py-32">
            <Container className="gap-8 items-center">
                <h3 className="font-extrabold text-2xl">Haluatko tarjouksen muutosta?</h3>
                <Button type="Main">Pyydä tarjous</Button>
                <div className="flex gap-2 font-bold"><span>Voit myös soittaa</span><Phone call="+358400631118" number="0400 631 118" /></div>
            </Container>
        </div>
    )
}

export default CallToAction;
