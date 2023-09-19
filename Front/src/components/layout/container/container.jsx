import React from 'react';
import SectionHeader from '../section.cards.header/section-cards-header';
import Aside from '../aside/aside';

const Container = ({ pageTitle, pageDescription,  children }) => {
 


 return <div className="container">
    
  <main className="main__cards">
      
   <SectionHeader pageTitle={pageTitle} pageDescription={pageDescription} />
    
    <section className="section-cards">
      
      <div className="cards__container">
            {children}
      </div>
    </section>
  </main>

  <Aside />
</div>
};

export default Container;