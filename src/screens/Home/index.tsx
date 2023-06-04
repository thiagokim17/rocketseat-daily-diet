import { Percent } from '@components/Percent';
import  { Header }  from '@components/Header';
import { Button } from '@components/Button';
import * as PhosphorIcons from 'phosphor-react-native';
import { MealCard } from '@components/MealCard';
import { SectionList } from 'react-native';

import { Container, ListDate, NoMealsMessage, Title } from './styles';

export function Home() {
  return (
    <>
      <Container>
        <Header />
        <Percent percentage={10} onPress={undefined}/>
        <Title>
          Refeições
        </Title>
            
        <Button
				title='Nova refeição'
				MyIcon={ PhosphorIcons.Plus }
				onPress={ undefined }
				style={{ marginBottom: 8 }}
			/>



						<SectionList
							sections={ [] }
							keyExtractor={ item => item.date + '-' + item.time }
							renderItem={({ item }) => (
								<MealCard
									name={ item.name }
									hour={ item.time }
									isInsideTheDiet={ item.isInsideTheDiet }
									onPress={ undefined}
								/>
							)}
							renderSectionHeader={({ section }) => {
								const [day, month, year] = '03/03/2012'.split('/');
								const newYear = year.substring(2, 4);

								return <ListDate>{ day }.{ month }.{ newYear }</ListDate>
							}}
							showsVerticalScrollIndicator={ false} 
							contentContainerStyle={
								0 === 0
									? { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }
									: { paddingBottom: '40%' }
							}
							ListEmptyComponent={() => (
								<NoMealsMessage>
                    Ainda não há refeições cadastradas, adicione sua primeira refeição acima.
                </NoMealsMessage>
							)}
						/>


      </Container>
    </>
  );
}
