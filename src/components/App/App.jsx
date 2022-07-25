import {PageTitle} from 'components/PageTitle/PageTitle';
import {Wrapper} from 'components/Wrapper/Wrapper';
import {createRandomArray} from 'utils/pairArrayGenerationService';


export const  App = () =>  {
  return (
    <div>
      <PageTitle text="Сheck your memory"/>
      <Wrapper numbers = {createRandomArray()}/>
    </div>
  );
}

