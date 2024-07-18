import { LeftSidePanel, Screen, ScreenContent, SidePannel } from 'components/Screen'
import { Container } from './Content.styles'
import { useTranslation } from 'hooks/useTranslations'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'
import { ScreenHeader } from 'components/ScreenHeader'
import { Button } from 'components/Button'
import { DataTable } from 'components/DataTable'
import { TableDataSet } from 'models'
import { useState } from 'react'
import { schemasTestData } from 'fixtures/schemas'

export const Content = () => {
    const { t } = useTranslation()
    const [head] = useState<TableDataSet>({
        id: '',
        name: 'Name',
        changes: 'Changes',
        userReference: 'byUser',
    })

    const [rowData] = useState<TableDataSet[]>(schemasTestData)

    return (
        <Screen pannel={PANNELS.CONTENT}>
            <LeftSidePanel title={t('common:menu.content')}>{'testing content'}</LeftSidePanel>
            <ScreenHeader
                title={'Título de la tabla actual'}
                actions={
                    <>
                        <Button.MainAction action={() => {}} text={'action1'} />
                    </>
                }
            ></ScreenHeader>
            <ScreenContent pannel={PANNELS.CONTENT}>
                <DataTable
                    headerData={head}
                    data={rowData}
                    tableType={PANNELS.SCHEMAS}
                    checkable
                    hasMenu
                />
            </ScreenContent>
            <SidePannel pannel={PANNELS.CONTENT}>
                <Container>{'Container sample'}</Container>
            </SidePannel>
        </Screen>
    )
}
