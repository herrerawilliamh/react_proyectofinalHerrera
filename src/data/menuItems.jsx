export const menuItems = [
    {
      title: 'Inicio',
      url: '/',
    },
    {
      title: 'Productos',
      url: '/productos',
      submenu: [
        {
          title: 'Todos los productos',
          url: 'productos',
        },
        {
          title: 'Pantalones',
          url: 'productos/pantalones',
        },
        {
          title: 'Medias',
          url: 'productos/medias',
        },
        {
          title: 'Buzos',
          url: 'productos/buzos',
        },
        {
          title: 'Remeras',
          url: 'productos/remeras',
        },
      ],
    },
    {
      title: 'Nosotros',
      url: '/nosotros',
    },
    {
      title: 'Contacto',
      url: '/contacto',
    },
  ];