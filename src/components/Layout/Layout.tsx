import { LayoutContainer } from './Layout.styles'
import { APP_PATH } from 'models'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    RouterProvider,
} from 'react-router-dom'
import { LandingScreen, VideoScreen } from 'pages'

export const Layout = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={APP_PATH.ROOT} element={<Root />}>
                <Route path={APP_PATH.ROOT} element={<LandingScreen />} />
                <Route path={APP_PATH.HOME} element={'<Home />'} />
                <Route path={APP_PATH.LANDING} element={'<Landing />'} />
                <Route path={APP_PATH.MENU} element={'<Menu />'} />
                <Route path={APP_PATH.INFORMATIVE} element={'<Informative />'} />
                <Route path={APP_PATH.INTERACTIVE} element={'<Interactive />'} />
                <Route path={APP_PATH.VIDEO} element={<VideoScreen />} />
                <Route path={APP_PATH.DECISION} element={'<Decision />'} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

const Root = () => {
    return (
        <LayoutContainer>
            {/* <UpperBarControler /> */}
            <Outlet />
        </LayoutContainer>
    )
}
