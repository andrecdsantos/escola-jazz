
import { title } from '../../config/config.js'
import { header} from '../../components/header.js'

document.querySelector('#header').innerHTML = header;
document.querySelector('h1').innerText = title;
