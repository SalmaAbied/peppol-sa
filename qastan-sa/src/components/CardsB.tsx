import React from 'react';
import { CircleGauge, Clock, CheckCheck, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function CardsB() {
  const { t } = useTranslation();

  return (
    <div className='container mx-auto my-20 grid max-w-7xl justify-center'>
      <div className='md:mx-8'>
        <header className='mx-auto mb-20 text-center md:mb-16'>
          <h1 className='text-center text-3xl font-light md:mb-5 pt-10'dangerouslySetInnerHTML={{ __html: t('Boekhouders.Cards.Title') }}></h1>
        </header>
        <main>
          <section className='grid items-center gap-6 lg:grid-flow-col lg:grid-cols-3 md:gap-8'>
            <div className='md:row-span-2'>
              <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoLime bg-white p-7 shadow-2xl'>
                <div className='mb-8'>
                  <h3 className='mb-1.5 text-xl font-semibold'>
                    {t('Boekhouders.Cards.CardTitle1')}
                  </h3>
                  <p className='text-sm opacity-50'>
                    {t('Boekhouders.Cards.CardText1')}
                  </p>
                </div>
                <div className='self-end'>
                  <CircleGauge size={32} strokeWidth={1} color='#469BC3'/>
                </div>
              </div>
            </div>
            <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoRed bg-white p-7 shadow-xl'>
              <div className='mb-8'>
                <h3 className='mb-1.5 text-xl font-semibold'>
                  {t('Boekhouders.Cards.CardTitle2')}
                </h3>
                <p className='text-sm opacity-50'>
                  {t('Boekhouders.Cards.CardText2')}
                </p>
              </div>
              <div className='self-end'>
                <Clock size={32} strokeWidth={1} color='#469BC3'/>
              </div>
            </div>
            <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoOrange bg-white p-7 shadow-xl'>
              <div className='mb-8'>
                <h3 className='mb-1.5 text-xl font-semibold'>
                  {t('Boekhouders.Cards.CardTitle3')}
                </h3>
                <p className='text-sm opacity-50'>
                  {t('Boekhouders.Cards.CardText3')}
                </p>
              </div>
              <div className='self-end'>
                <CheckCheck size={32} strokeWidth={1} color='#469BC3'/>
              </div>
            </div>
            <div className='md:row-span-2'>
              <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-legoBlue bg-white p-7 shadow-xl'>
                <div className='mb-8'>
                  <h3 className='mb-1.5 text-xl font-semibold '>
                    {t('Boekhouders.Cards.CardTitle4')}
                  </h3>
                  <p className='text-sm opacity-50'>
                    {t('Boekhouders.Cards.CardText4')}
                  </p>
                </div>
                <div className='self-end'>
                  <Smile size={32} strokeWidth={1} color='#469BC3'/>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default CardsB;
