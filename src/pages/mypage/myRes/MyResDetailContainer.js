import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import CanceleContainer from './cancele/CanceleContainer';


const MyResDetailContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<CanceleContainer />} />
  );
};

export default MyResDetailContainer;
