import conectar from '../assets/images/conectar.jpg'
import creatingCode from '../assets/images/CreatingCode.jpg'
import rectangle from '../assets/images/Rectangle 10.png'
import vector7 from '../assets/images/Vector 7.png'
import Headerquienessomos from '../headers/Headerquienessomos'
import '../styles/QuienesSomos.css'

function QuienesSomos () {
  return (
    <><Headerquienessomos />
      <div className='content50'>
        <div className='title'>
          <img src={rectangle} alt='rectangle' className='icon icon-left' />
          Te incluyes?
          <img src={vector7} alt='vecto6r' className='icon icon-right' />
        </div>
        <div className='subtitle'>EducFly es una plataforma digital creada para fomentar la colaboración y el trabajo en equipo entre estudiantes de diferentes lugares del mundo. Su objetivo es proporcionar un espacio en línea donde los estudiantes puedan conectarse, compartir sus conocimientos y habilidades, y trabajar juntos en proyectos colaborativos para crear sistemas o ideas digitales innovadoras.

          La idea detrás de EducFly es que la colaboración y el trabajo en equipo son fundamentales para el éxito en cualquier campo. Cuando los estudiantes trabajan juntos en proyectos colaborativos, no solo aprenden a trabajar juntos y a comunicarse de manera efectiva, sino que también pueden aprovechar las fortalezas de cada miembro del equipo para crear proyectos más completos y exitosos.

          La plataforma de EducFly es fácil de usar y está diseñada para ser accesible para estudiantes de todas las edades y habilidades. Los estudiantes pueden unirse a proyectos en línea o crear sus propios proyectos para invitar a otros estudiantes a unirse. También pueden encontrar otros estudiantes con intereses similares para conectarse y trabajar juntos en proyectos futuros.

          La plataforma también cuenta con herramientas de comunicación y colaboración, como salas de chat en línea y herramientas de edición de documentos compartidos. Estas herramientas permiten a los estudiantes trabajar juntos en tiempo real, sin importar en qué parte del mundo se encuentren. Además, los estudiantes pueden compartir recursos y materiales de aprendizaje en línea, lo que les permite aprender de manera colaborativa y compartir sus conocimientos con otros.

          Una de las principales ventajas de EducFly es que está disponible en línea y se puede acceder desde cualquier lugar con una conexión a Internet. Esto significa que los estudiantes pueden conectarse con otros estudiantes de todo el mundo y trabajar juntos en proyectos, sin importar dónde se encuentren. Además, la plataforma es gratuita para los estudiantes, lo que la hace aún más accesible.
        </div>
        <div className='imageplataform'>
          <div className='projectimage'>
            <img src={conectar} alt='conectar' className='conectar' />
            <img src={creatingCode} alt='creatingcode' className='conectar' />
          </div>
        </div>
        <p>EducFly es una herramienta valiosa para cualquier estudiante que busque mejorar sus habilidades de trabajo en equipo y colaboración. La plataforma fomenta la creatividad, la innovación y el aprendizaje colaborativo, lo que permite a los estudiantes explorar nuevas ideas y desarrollar habilidades importantes para el futuro. Además, trabajar en proyectos colaborativos en EducFly puede ayudar a los estudiantes a desarrollar su currículum y destacar en sus solicitudes de empleo y admisión universitaria.

          En resumen, EducFly es una plataforma en línea que proporciona un espacio para que los estudiantes de diferentes lugares del mundo se conecten, colaboren y trabajen juntos en proyectos digitales innovadores. La plataforma está diseñada para ser accesible para estudiantes de todas las edades y habilidades y cuenta con herramientas de comunicación y colaboración en línea para facilitar el trabajo en equipo. EducFly es una herramienta valiosa para cualquier estudiante que busque mejorar sus habilidades de trabajo en equipo y colaboración y desarrollar habilidades importantes para el futuro.
        </p>
      </div>
    </>
  )
}

export default QuienesSomos
