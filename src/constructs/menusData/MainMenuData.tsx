import { Icon } from 'components/Icon'
import { HomeRoutes, RouteName } from 'components/MenuPannel/MenuPannel.models'
import { Text } from 'components/Text'
import { useTranslation } from 'hooks/useTranslations'
import { iKeyTranslations } from 'locales/translationKeys'

type TitleProps = {
    route: HomeRoutes
}

const t = useTranslation()

const Title = ({ route }: TitleProps) => {
    const RouteNames: Record<HomeRoutes, iKeyTranslations> = {
        [HomeRoutes.ACADEMY]: 'common:menu.academy',
        [HomeRoutes.ACCOUNT]: 'common:menu.account',
        [HomeRoutes.CONTACT]: 'common:menu.contact',
        [HomeRoutes.DOCUWEB]: 'common:menu.docuweb',
        [HomeRoutes.MECUATE]: 'common:menu.mecuate',
        [HomeRoutes.PROJECTS]: 'common:menu.projects',
        [HomeRoutes.PUBLICATIONS]: 'common:menu.publications',
        [HomeRoutes.SERVICES]: 'common:menu.services',
    }
    return (
        <Text size={'mid'} font={'sans'} weight={'bold'}>
            {t(RouteNames[route])}
        </Text>
    )
}

const getIcon = ({ route }: TitleProps) => {
    const RouteIcons: Record<HomeRoutes, React.ReactNode> = {
        [HomeRoutes.ACADEMY]: <Icon color={'text_li'} size={'small'} icon={'abc'} />,
        [HomeRoutes.ACCOUNT]: <Icon color={'text_li'} size={'small'} icon={'person'} />,
        [HomeRoutes.CONTACT]: <Icon color={'text_li'} size={'small'} icon={'chat'} />,
        [HomeRoutes.DOCUWEB]: <Icon color={'text_li'} size={'small'} icon={'headset'} />,
        [HomeRoutes.MECUATE]: <Icon color={'text_li'} size={'small'} icon={'home'} />,
        [HomeRoutes.PROJECTS]: <Icon color={'text_li'} size={'small'} icon={'bee'} />,
        [HomeRoutes.PUBLICATIONS]: <Icon color={'text_li'} size={'small'} icon={'quiz'} />,
        [HomeRoutes.SERVICES]: <Icon color={'text_li'} size={'small'} icon={'recycling'} />,
    }
    return RouteIcons[route]
}

export const SidebarData = [
    {
        title: <Title route={HomeRoutes.MECUATE} />,
        path: RouteName[HomeRoutes.MECUATE],
        icon: getIcon({ route: HomeRoutes.MECUATE }),
    },
    {
        title: <Title route={HomeRoutes.ACCOUNT} />,
        path: RouteName[HomeRoutes.ACCOUNT],
        icon: getIcon({ route: HomeRoutes.ACCOUNT }),
    },
    {
        title: <Title route={HomeRoutes.ACADEMY} />,
        path: RouteName[HomeRoutes.ACADEMY],
        icon: getIcon({ route: HomeRoutes.ACADEMY }),
    },
    {
        title: <Title route={HomeRoutes.SERVICES} />,
        path: RouteName[HomeRoutes.SERVICES],
        icon: getIcon({ route: HomeRoutes.SERVICES }),
    },
    {
        title: <Title route={HomeRoutes.DOCUWEB} />,
        path: RouteName[HomeRoutes.DOCUWEB],
        icon: getIcon({ route: HomeRoutes.DOCUWEB }),
    },
    {
        title: <Title route={HomeRoutes.PROJECTS} />,
        path: RouteName[HomeRoutes.PROJECTS],
        icon: getIcon({ route: HomeRoutes.PROJECTS }),
    },
    {
        title: <Title route={HomeRoutes.PUBLICATIONS} />,
        path: RouteName[HomeRoutes.PUBLICATIONS],
        icon: getIcon({ route: HomeRoutes.PUBLICATIONS }),
    },
    {
        title: <Title route={HomeRoutes.CONTACT} />,
        path: RouteName[HomeRoutes.CONTACT],
        icon: getIcon({ route: HomeRoutes.CONTACT }),
    },
]

/* 
    subNav: [
      {
        title: <Text size={'mid'} font={'sans'} weight={'bold'}>Reports</Text>,
        path: '/reports/reports1',
        icon: <Icon color={'text_li'}size={'small'} icon={'rain'} />,
        cName: 'sub-nav'
      },
      {
        title: <Text size={'mid'} font={'sans'} weight={'bold'}>Reports 2</Text>,
        path: '/reports/reports2',
        icon: <Icon color={'text_li'}size={'small'} icon={'cloudy'} />,
        cName: 'sub-nav'
      },
      {
        title: <Text size={'mid'} font={'sans'} weight={'bold'}>Reports 3</Text>,
        path: '/reports/reports3',
        icon: <Icon color={'text_li'}size={'small'} icon={'sunny'} />,
      }
    ]
*/
