import agropecuario from '../assets/segunda-division/agropecuario.png';
import aldosivi from '../assets/segunda-division/aldosivi.png';
import allboys from '../assets/segunda-division/allboys.png';
import almagro from '../assets/segunda-division/almagro.png';
import almirante from '../assets/segunda-division/almirante.png';
import alvarado from '../assets/segunda-division/alvarado.png';
import atlanta from  '../assets/segunda-division/atlanta.png';
import atleticorafaela from '../assets/segunda-division/atleticorafaela.png';
import brownadrogue from '../assets/segunda-division/brownadrogue.png';
import cadu from '../assets/segunda-division/cadu.png';
import chacarita from '../assets/segunda-division/chacarita.png';
import chaco_for_ever from '../assets/segunda-division/chaco_for_ever.png';
import defensores from '../assets/segunda-division/defensores.png';
import depmaipu from '../assets/segunda-division/depmaipu.png';
import deportivo_madryn from '../assets/segunda-division/deportivo_madryn.png';
import estudiantes from '../assets/segunda-division/estudiantes.png';
import estudiantesrc from '../assets/segunda-division/estudiantesrc.png';
import ferro from '../assets/segunda-division/ferro.png';
import flandria from '../assets/segunda-division/flandria.png';
import gimnasiajujuy from '../assets/segunda-division/gimnasiajujuy.png';
import gimnasiamendoza from '../assets/segunda-division/gimnasiamendoza.png';
import guemes from '../assets/segunda-division/guemes.png';
import guillermobrown from '../assets/segunda-division/guillermobrown.png';
import mitre from '../assets/segunda-division/mitre.png';
import moron from '../assets/segunda-division/moron.png';
import nueva_chicago from '../assets/segunda-division/nueva_chicago.png';
import patronato from '../assets/segunda-division/patronato.png';
import primeranacional from '../assets/segunda-division/primeranacional.png';
import quilmes from '../assets/segunda-division/quilmes.png';
import racing_cordoba from '../assets/segunda-division/racing_cordoba.png';
import riestra from '../assets/segunda-division/riestra.png';
import sanmartinsj from '../assets/segunda-division/sanmartinsj.png';
import sanmartintuc from '../assets/segunda-division/sanmartintuc.png';
import santelmo from '../assets/segunda-division/santelmo.png';
import temperley from '../assets/segunda-division/temperley.png';
import tristansuarez from '../assets/segunda-division/tristansuarez.png';
import villadalmine from '../assets/segunda-division/villadalmine.png';


export const getPrimeraNacionalIconByName = (name) => {
    const image = {
        "agropecuario" : agropecuario,
        "aldosivi" : aldosivi,
        "allboys" : allboys,
        "almagro" : almagro,
        "almirante" : almirante,
        "alvarado" : alvarado,
        "atlanta" : atlanta,
        "atleticorafaela" : atleticorafaela,
        "brownadrogue" : brownadrogue,
        "cadu" : cadu,
        "chacarita" : chacarita,
        "chaco_for_ever" : chaco_for_ever,
        "defensores" : defensores,
        "depmaipu" : depmaipu,
        "deportivo_madryn" : deportivo_madryn,
        "estudiantes" : estudiantes,
        "estudiantesrc" : estudiantesrc,
        "ferro" : ferro,
        "flandria" : flandria,
        "gimnasiajujuy" : gimnasiajujuy,
        "gimnasiamendoza" : gimnasiamendoza,
        "guemes" : guemes,
        "guillermobrown" : guillermobrown,
        "mitre" : mitre,
        "moron" : moron,
        "nueva_chicago" : nueva_chicago,
        "patronato" : patronato,
        "primeranacional" : primeranacional,
        "quilmes" : quilmes,
        "racing_cordoba" : racing_cordoba,
        "riestra" : riestra,
        "sanmartinsj" : sanmartinsj,
        "sanmartintuc" : sanmartintuc,
        "santelmo" : santelmo,
        "temperley" : temperley,
        "tristansuarez" : tristansuarez,
        "villadalmine" : villadalmine
    };
    return image[name];
}