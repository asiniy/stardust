import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import BreadcrumbDivider from './BreadcrumbDivider'
import BreadcrumbSection from './BreadcrumbSection'

/**
 * A breadcrumb is used to show hierarchy between content.
 */
function Breadcrumb(props) {
  const { children, className, divider, icon, size, sections } = props
  const rest = getUnhandledProps(Breadcrumb, props)
  const classes = cx('ui', className, size, 'breadcrumb')

  if (!sections) return <div {...rest} className={classes}>{children}</div>

  const dividerJSX = <BreadcrumbDivider icon={icon}>{divider}</BreadcrumbDivider>
  const sectionsJSX = []

  sections.forEach(({ text, key, ...restSection }, index) => {
    const finalKey = key || text
    const dividerKey = `${finalKey}-divider`

    sectionsJSX.push(
      <BreadcrumbSection {...restSection} key={finalKey}>{text}</BreadcrumbSection>
    )

    if (index !== sections.length - 1) {
      sectionsJSX.push(React.cloneElement(dividerJSX, { key: dividerKey }))
    }
  })

  return <div {...rest} className={classes}>{sectionsJSX}</div>
}

Breadcrumb._meta = {
  library: META.library.semanticUI,
  name: 'Breadcrumb',
  type: META.type.collection,
  props: {
    size: _.without(sui.sizes, 'medium'),
  },
}

Breadcrumb.propTypes = {
  /** Primary content of the Breadcrumb */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['sections', 'icon', 'divider']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Breadcrumb className. */
  className: PropTypes.string,

  /** For use with the sections prop. Primary content of the Breadcrumb.Divider. */
  divider: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['icon']),
    PropTypes.string,
  ]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['divider']),
    PropTypes.node,
  ]),

  /** Array of props for Breadcrumb.Section. */
  sections: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    React.PropTypes.array,
  ]),

  /** Size of Breadcrumb */
  size: PropTypes.oneOf(Breadcrumb._meta.props.size),
}

Breadcrumb.Divider = BreadcrumbDivider
Breadcrumb.Section = BreadcrumbSection

export default Breadcrumb
