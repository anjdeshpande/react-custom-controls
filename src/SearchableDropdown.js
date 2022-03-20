import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { SearchTextbox } from "./SearchTextbox";

export function SearchableDropdown(props) {
  const {
    menuContent,
    textboxProps,
    onMenuItemClicked,
    menuItemTemplate,
    ...others
  } = props || {};
  return (
    <UncontrolledDropdown {...others}>
      <DropdownToggle className="w-100 d-flex align-items-center p-0 border-0">
        <SearchTextbox {...textboxProps} />
      </DropdownToggle>
      <DropdownMenu className="w-100 rounded-0">
        {(menuContent || []).map((i) => (
          <DropdownItem
            onClick={() => onMenuItemClicked && onMenuItemClicked(i)}
          >
            {menuItemTemplate && menuItemTemplate(i)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
