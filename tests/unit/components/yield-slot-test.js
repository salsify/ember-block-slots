/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import Ember from 'ember'
import sinon from 'sinon'

describeComponent(
  'yield-slot',
  'Unit: YieldSlotComponent',
  {
    unit: true
  },
  function () {
    it('Default values are set correctly', function () {
      const component = this.subject({
        componentInit () {}
      })

      expect(
        component.get('name'),
        '"name" is set to null'
      ).to.be.null
    })

    it('init() - name must be set on yield-slot', function () {
      expect(
        () => this.subject(),
        '"name" property must be set on component'
      ).to.throw('You must include a name for your slot')
    })

    it('Dependent keys are correct', function () {
      const component = this.subject({
        componentInit () {}
      })

      const isSlotActiveDependentKeys = [
        '_slots',
        'name'
      ]

      expect(
        component.isSlotActive._dependentKeys,
        'Dependent keys are correct for isSlotActive()'
      ).to.eql(isSlotActiveDependentKeys)
    })

    it('"isSlotActive" is true when "_slots.name" is registered', function () {
      const testSlots = Ember.Object.create({ testName: true })

      const component = this.subject({
        name: 'wrongName',
        componentInit () {
          this.set('_slots', testSlots)
        }
      })

      Ember.run(() => component.set('name', 'testName'))

      expect(
        component.get('isSlotActive'),
        '"isSlotActive" is set to true'
      ).to.eql(true)
    })

    it('"isSlotActive" is false when "_slots.name" is not registered', function () {
      const testSlots = Ember.Object.create({ testName: false })

      const component = this.subject({
        name: 'wrongName',
        componentInit () {
          this.set('_slots', testSlots)
        }
      })

      Ember.run(() => component.set('name', 'testName'))

      expect(
        component.get('isSlotActive'),
        '"isSlotActive" is set to false'
      ).to.eql(false)
    })

    it('"_registerSlot(name)" calls "parentView._registerSlot(name)"', function () {
      const spy = sinon.spy()

      const parentViewObject = Ember.Object.create({
        _registerSlot: spy
      })

      const component = this.subject({
        componentInit () {},
        parentView: parentViewObject
      })

      component._registerSlot('testName')

      expect(
        spy.called,
        '"_registerSlot" called "parentView._registerSlot()"'
      ).to.be.true

      expect(
        spy.calledWith('testName'),
        '"parentView._registerSlot()" was called with the correct parameter'
      ).to.be.true
    })
  }
)
