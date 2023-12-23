const tableTheme = {
  borderColor: "#262626",
  colorBgContainer: "#1c1c1c",
  rowHoverBg: "#262626",
  headerColor: "#B5B5B5",
  headerBg: "#1c1c1c",
  rowSelectedBg: "#262626",
  rowSelectedHoverBg: "#1c1c1c",
  headerSplitColor: "none",
  fontFamily: "Poppins",
  colorText: "#fff",
  cellPaddingInline: 20,
  borderRadius: 20
}

const paginationTheme = {
  colorText: "#fff",
  position: 'center'
}

const antdTheme = {
  components: {
    Table: tableTheme,
    Pagination: paginationTheme
  }
}


export { antdTheme };
