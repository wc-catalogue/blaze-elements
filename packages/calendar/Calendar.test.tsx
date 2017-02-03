import * as expect from 'expect';
import * as isSameDay from 'date-fns/is_same_day';
import { Calendar } from './';
import { CalendarButton } from './components/Button';

import { h, mount } from 'bore';

describe( Calendar.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Calendar.is ) ).toBe( Calendar );

    });

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-calendar />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Calendar.is );

      });

    });

    it( `should render via JSX class`, () => {

      return mount(
        <Calendar />
      ).wait(( element ) => {

        expect( element.has( '.c-calendar' ) ).toBe( true );

      });

    });

  });

  describe( `API`, () => {

    describe( `[selectedDate]`, () => {

      it( `should automatically set today without selectedDate provided`, () => {

        return mount(
          <bl-calendar />
        ).wait(( element ) => {

          const today = new Date();
          const calendar = element.node as Calendar;
          expect( isSameDay( calendar.selectedDate, today ) ).toBe( true );

        });

      });

      it( `should set year and month based on selectedDay`, () => {

        return mount(
          <bl-calendar selectedDate={new Date( '1987-12-22' )} />
        ).wait(( element ) => {

          const yearMonth = element.all( '.c-calendar__header' );
          expect( yearMonth[ 0 ].node.innerHTML ).toBe( '1987' );
          expect( yearMonth[ 1 ].node.innerHTML ).toBe( 'December' );

        });

      });

    });

    describe( `[weekStartsOn]`, () => {

      it( `should set sunday as default`, () => {

        return mount(
          <bl-calendar />
        ).wait(( element ) => {

          const headDays = element.all( '.c-calendar__day' );
          expect( headDays[ 0 ].node.innerHTML ).toBe( 'Su' );

        });

      });

      it( `should set monday`, () => {

        return mount(
          <bl-calendar weekStartsOn="monday" />
        ).wait(( element ) => {

          const headDays = element.all( '.c-calendar__day' );
          expect( headDays[ 0 ].node.innerHTML ).toBe( 'Mo' );

        });

      });

      it( `should set sunday`, () => {

        return mount(
          <bl-calendar weekStartsOn="sunday" />
        ).wait(( element ) => {

          const headDays = element.all( '.c-calendar__day' );
          expect( headDays[ 0 ].node.innerHTML ).toBe( 'Su' );

        });

      });

    });

    describe( `[i18n]`, () => {

      const i18n = {
        monthsFull: [
          'Leden',
          'Únor',
          'Březen',
          'Duben',
          'Květen',
          'Červen',
          'Červenec',
          'Srpen',
          'Září',
          'Říjen',
          'Listopad',
          'Prosinec'
        ],
        todayButtonText: 'DNES',
        weekdays2char: [ 'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So' ]
      };


      it( `should set months internationalized`, () => {

        return mount(
          <bl-calendar i18n={i18n} selectedDate={new Date( '1987-12-22' )} />
        ).wait(( element ) => {

          expect( element.all( '.c-calendar__header' )[ 1 ].node.innerHTML ).toBe( 'Prosinec' );

        });

      });

      it( `should set weekdays internationalized`, () => {

        return mount(
          <bl-calendar i18n={i18n} />
        ).wait(( element ) => {

          expect( element.all( '.c-calendar__day' )[ 0 ].node.innerHTML ).toBe( 'Ne' );

        });

      });

      it( `should set button text internationalized`, () => {

        return mount(
          <bl-calendar i18n={i18n} />
        ).wait(( element ) => {

          expect( element.one( CalendarButton.is ).node.innerHTML ).toBe( 'DNES' );

        });

      });

    });

  });

});

