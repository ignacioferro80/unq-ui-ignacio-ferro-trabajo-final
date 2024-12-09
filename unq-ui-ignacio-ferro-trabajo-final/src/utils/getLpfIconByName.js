import argentinos from "../assets/primera-division/argentinos.png";
import atleticotucuman from "../assets/primera-division/atleticotucuman.png";
import banfield from "../assets/primera-division/banfield.png";
import barracas from "../assets/primera-division/barracas.png";
import boca from "../assets/primera-division/boca.png";
import centralcordoba from "../assets/primera-division/centralcordoba.png";
import defensa from "../assets/primera-division/defensa.png";
import estudiantes from "../assets/primera-division/estudiantes.png";
import gimnasia from "../assets/primera-division/gimnasia.png";
import godoycruz from "../assets/primera-division/godoycruz.png";
import huracan from "../assets/primera-division/huracan.png";
import independiente from "../assets/primera-division/independiente.png";
import independienteriv from "../assets/primera-division/independienteriv.png";
import instituto from "../assets/primera-division/instituto.png";
import lanus from "../assets/primera-division/lanus.png";
import lpf from "../assets/primera-division/lpf.png";
import newells from "../assets/primera-division/newells.png";
import platense from "../assets/primera-division/platense.png";
import racing from "../assets/primera-division/racing.png";
import riestra from "../assets/primera-division/riestra.png";
import river from "../assets/primera-division/river.png";
import rosariocentral from "../assets/primera-division/rosariocentral.png";
import sanlorenzo from "../assets/primera-division/sanlorenzo.png";
import sarmiento from "../assets/primera-division/sarmiento.png";
import talleres from "../assets/primera-division/talleres.png";
import tigre from "../assets/primera-division/tigre.png";
import union from "../assets/primera-division/union.png";
import velez from "../assets/primera-division/velez.png";

export const getLpfIconByName = (name) => {
    const image = {
        "argentinos" : argentinos,
        "atleticotucuman" : atleticotucuman,
        "banfield" :  banfield, 
        "barracas" :  barracas,
        "boca" :  boca,
        "centralcordoba" :  centralcordoba,
        "defensa" :  defensa,
        "estudiantes" :  estudiantes,
        "gimnasia" :  gimnasia,
        "godoycruz" :  godoycruz,
        "huracan" :  huracan,
        "independiente" :  independiente,
        "independienteriv" :  independienteriv,
        "instituto" :  instituto,
        "lanus" :  lanus,
        "lpf" :  lpf,
        "newells" :  newells,
        "platense" :  platense,
        "racing" :  racing,
        "riestra" :  riestra,
        "river" :  river,
        "rosariocentral" :  rosariocentral,
        "sanlorenzo" :  sanlorenzo,
        "sarmiento" :  sarmiento,
        "talleres" :  talleres,
        "tigre" :  tigre,
        "union" :  union,
        "velez" :  velez
    };
    return image[name]
}