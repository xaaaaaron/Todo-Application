import * as React from 'react'
import renderer from 'react-test-renderer'

import { StyledText } from '../../components/atoms/StyledText'

it(`renders correctly`, () => {
  const tree = renderer.create(<StyledText>Snapshot test!</StyledText>).toJSON()

  expect(tree).toMatchSnapshot()
})
