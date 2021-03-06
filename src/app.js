
import React from 'react';
import MultiGroup from './components/multigroup';
import Pages from './components/pagesexample';

function app() {
  return (
    <MultiGroup animTime={1.5}>

      <multiScroll>
        <leftSide>
          <Pages pg="1" side="left" />
        </leftSide>
        <rightSide>
          <Pages pg="1" side="right" />
        </rightSide>
      </multiScroll>

      <multiScroll >
        <leftSide>
          <Pages pg="2" side="left" />

        </leftSide>
        <rightSide>
          <Pages pg="2" side="right" />
        </rightSide>
      </multiScroll>

      <multiScroll >
        <leftSide>
          <Pages pg="3" side="left" />
        </leftSide>
        <rightSide>

        </rightSide>
      </multiScroll>
    </MultiGroup>
  )
}

export default app