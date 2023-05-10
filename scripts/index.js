const setup = () => {
	let personen = [];

    l1 = {}
    l1.straat = "Koekoekstraat 70"
    l1.postcode = "9090"
    l1.gemeente = "Melle"

    l2 = {}
    l2.straat = "Kerkstraat 12"
    l2.postcode = "Brugge"
    l2.gemeente = "8000"

    p1 = {}
    p1.voornaam = "Jan"
    p1.familienaam = "Janssens"
    p1.adres= l1;

    p2 = {}
    p2.voornaam = "Mieke"
    p2.familienaam = "Mickelson"
    p2.adres= l2;



    personen.push(p1)
    personen.push(p2)




}

window.addEventListener("load", setup);