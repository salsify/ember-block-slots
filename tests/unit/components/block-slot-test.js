/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import Ember from 'ember'
import sinon from 'sinon'
import _ from 'lodash'

describeComponent(
  'block-slot',
  'Unit: BlockSlotComponent',
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

      expect(
        component.get('yieldedSlot'),
        '"yieldedSlot" is set to null'
      ).to.be.null
    })

    it('init() - name must be set on block-slot', function () {
      expect(
        () => this.subject(),
        '"name" property must be set on component'
      ).to.throw('You must include a name for your block')
    })

    it('Dependent keys are correct', function () {
      const component = this.subject({
        componentInit () {}
      })

      const isSlotYieldDependentKeys = [
        'name',
        'yieldedSlotName'
      ]

      const yieldedSlotNameDependentKeys = [
        'parentView.name'
      ]

      expect(
        component.isSlotYield._dependentKeys,
        'Dependent keys are correct for isSlotYield()'
      ).to.eql(isSlotYieldDependentKeys)

      expect(
        component.yieldedSlotName._dependentKeys,
        'Dependent keys are correct for yieldedSlotName()'
      ).to.eql(yieldedSlotNameDependentKeys)
    })

    it('"componentInit()" calls "parentView._registerSlot(name)"', function () {
      const spy = sinon.spy()

      const parentViewObject = Ember.Object.create({
        _registerSlot: spy
      })

      this.subject({
        name: 'testName',
        parentView: parentViewObject
      })

      expect(
        spy.called,
        '"componentInit()" called "parentView._registerSlot()"'
      ).to.be.true

      expect(
        spy.calledWith('testName'),
        '"parentView._registerSlot()" was called with the correct parameter'
      ).to.be.true
    })

    it('"yieldedSlotName" is set to "parentView.name"', function () {
      const parentViewObject = Ember.Object.create({ name: 'originalName' })

      const component = this.subject({
        parentView: parentViewObject,
        componentInit () {}
      })

      Ember.run(() => component.set('parentView.name', 'testName'))

      expect(
        component.get('yieldedSlotName'),
        '"yieldedSlotName" is set'
      ).to.eql('testName')
    })

    it('"isSlotYield" is set to true when "name" and "yieldedSlotName" are equivalent', function () {
      const spy = sinon.spy()

      const parentViewObject = Ember.Object.create({
        name: 'testName',
        _registerSlot: spy
      })

      const component = this.subject({
        name: 'wrongName',
        parentView: parentViewObject
      })

      Ember.run(() => component.set('name', 'testName'))

      expect(
        component.get('isSlotYield'),
        '"isSlotYield" is true'
      ).to.be.true
    })

    it('"isSlotYield" is set to false when "name" and "yieldedSlotName" are not equivalent', function () {
      const spy = sinon.spy()

      const parentViewObject = Ember.Object.create({
        name: 'testName',
        _registerSlot: spy
      })

      const component = this.subject({
        name: 'wrongName',
        parentView: parentViewObject
      })

      expect(
        component.get('isSlotYield'),
        '"isSlotYield" is false'
      ).to.be.false
    })

    it('Only 10 computed properties are generated', function () {
      const spy = sinon.spy()

      const slotObject = Ember.Object.create({
        params: Ember.A(
          [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]
        )
      })

      const parentViewObject = Ember.Object.create({
        name: 'testName',
        _registerSlot: spy
      })

      const component = this.subject({
        name: 'testName',
        yieldedSlot: slotObject,
        parentView: parentViewObject
      })

      _.range(10).forEach((number) => {
        expect(
          component.get(`p${number}`),
          `"p${number}" computed property gets set`
        ).to.eql(`${number}`)
      })

      expect(
        component.get('p10'),
        '"p10" computed property is not created'
      ).to.be.undefined
    })
  }
)
