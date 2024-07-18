import { globalStyles } from './stitches.conf'
import { gradientStyles } from 'assets/styles/Gradients'
import { scrollStyles } from 'assets/styles/Scrolls'
import { Layout } from 'components/Layout'
/* 
// TODO(): [
    needs to be added the dependency injector, 
    missing use Context,
    missing use fixtures,
    missing lang/locale selection

]
 */
function App() {
    globalStyles()
    gradientStyles()
    scrollStyles()

    return <Layout />
}

export default App
