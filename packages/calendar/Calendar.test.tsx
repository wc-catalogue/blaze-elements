import * as expect from 'expect';
import * as isSameDay from 'date-fns/is_same_day';
import * as parse from 'date-fns/parse';
import { Calendar } from './index';
import { CalendarButton } from './components/Button';

import { h, mount, WrappedNode } from 'bore';
import { emit } from 'skatejs';
import { GenericEvents } from '../_helpers';

describe( Calendar.is, () => {

  describe( `Custom element`, () => {

    it( `should be registered`, () => {

      expect( customElements.get( Calendar.is ) ).toBe( Calendar );

    } );

    it( `should render via JSX IntrinsicElement`, () => {

      return mount(
        <bl-calendar />
      ).wait(( element ) => {

        expect( element.node.localName ).toBe( Calendar.is );

      } );

    } );

    it( `should render via JSX class`, () => {

      return mount(
        <Calendar />
      ).wait(( element ) => {

        expect( element.has( '.c-calendar' ) ).toBe( true );

      } );

    } );

  } );

  describe( `API`, () => {

    describe( `[selectedDate]`, () => {

      it( `should automatically set today without selectedDate provided`, () => {

        return mount(
          <bl-calendar />
        ).wait(( element ) => {

          const today = new Date();
          const calendar = element.node as Calendar;
          expect( isSameDay( calendar.selectedDate, today ) ).toBe( true );

        } );

      } );

      it( `should set selectedDate via attribute`, () => {

        return mount(
          <bl-calendar attrs={{ 'selected-date': '1987-12-22' }} />
        ).wait( checkCorrectlySetDateFromProps );

      } );

      it( `should set year and month based on selectedDay`, () => {

        return mount(
          <bl-calendar selectedDate={new Date( '1987-12-22' )} />
        ).wait( checkCorrectlySetDateFromProps );

      } );

      function checkCorrectlySetDateFromProps( element: WrappedNode ) {
        const yearMonth = element.all( '.c-calendar__header' );
        expect( yearMonth[ 0 ].node.innerHTML ).toBe( '1987' );
        expect( yearMonth[ 1 ].node.innerHTML ).toBe( 'December' );
      }

    } );

    describe( `[weekStartsOn]`, () => {

      it( `should set sunday as default`, () => {

        return mount(
          <bl-calendar />
        ).wait( checkWeekStarts.bind( null, 'Su' ) );

      } );

      it( `should set monday`, () => {

        return mount(
          <bl-calendar weekStartsOn="monday" />
        ).wait( checkWeekStarts.bind( null, 'Mo' ) );

      } );

      it( `should set monday via attribute`, () => {

        return mount(
          <bl-calendar attrs={{ 'week-starts-on': 'monday' }} />
        ).wait( checkWeekStarts.bind( null, 'Mo' ) );

      } );

      it( `should set sunday`, () => {

        return mount(
          <bl-calendar weekStartsOn="sunday" />
        ).wait( checkWeekStarts.bind( null, 'Su' ) );

      } );

      function checkWeekStarts( startDay: string, element: WrappedNode ) {
        const headDays = element.all( '.c-calendar__day' );
        expect( headDays[ 0 ].node.innerHTML ).toBe( startDay );
      }

    } );

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

        } );

      } );

      it( `should set weekdays internationalized`, () => {

        return mount(
          <bl-calendar i18n={i18n} />
        ).wait(( element ) => {

          expect( element.all( '.c-calendar__day' )[ 0 ].node.innerHTML ).toBe( 'Ne' );

        } );

      } );

      it( `should set button text internationalized`, () => {

        return mount(
          <bl-calendar i18n={i18n} />
        ).wait(( element ) => {

          expect( element.one( CalendarButton.is ).node.innerHTML ).toBe( 'DNES' );

        } );

      } );

    } );

    describe( `(dateChange)`, () => {

      it( `should emit onChange event with selected day value`, () => {

        const expectedDate = parse( '1987-12-09' );

        let changeTriggered = false;
        let selectedDate: Date;
        const handleChange = ( e: GenericEvents.CustomChangeEvent<Date> ) => {
          changeTriggered = true;
          selectedDate = e.detail.value;
        };

        return mount(
          <bl-calendar
            events={{ dateChange: handleChange }}
            selectedDate={parse( '1987-12-22' )}
          />
        ).wait(( element ) => {

          // existing day in month
          const oneDay = element.all( 'button:not(.c-calendar__control)' )[ 10 ].node as HTMLButtonElement;
          emit( oneDay, 'click' );
          expect( changeTriggered ).toBe( true );
          expect( isSameDay( expectedDate, selectedDate ) ).toBe( true );

        } );

      } );

    } );

  } );

} );
