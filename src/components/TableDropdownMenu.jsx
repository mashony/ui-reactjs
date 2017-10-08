import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const TableDropdownMenu = (props) => {

  /**
   * children
   * renders a li>a list based on props.actions
   * @type {[type]}
   */
  const children = props.actions.map((el, index) => (
    <li
      className="menu--item"
      key={index}
    >
      <a href={el.url}>{el.label}</a>
    </li>
  ));

  /**
   * triggerIconClass
   * handle the class switch
   * @type variable
   */
  const triggerIconClass = classnames('fa fa-fw', {
    'fa-chevron-up': props.listIsVisible,
    'fa-chevron-down': !props.listIsVisible
  });
  return (
    <span>
      <button
        className="wfp-btn xsmall dropdown-trigger"
        onClick={props.handleListVisibility}
      >
        <i className={triggerIconClass} />
      </button>
      <div
        className="dropdown fill-data-list-item"
        style={{
          display: props.listIsVisible
            ? "block"
            : "none"
        }}
      >
        {props.title && (
          <div className="dropdown--label">{props.title}</div>
        )}
        <ul className="menu--group">
          {children}
        </ul>
      </div>
    </span>
  );

};

TableDropdownMenu.propTypes = {
  actions: PropTypes.array,
  handleListVisibility: PropTypes.func,
  listIsVisible: PropTypes.bool,
  title: PropTypes.string
};
TableDropdownMenu.defaultProps = {};

export default TableDropdownMenu;
