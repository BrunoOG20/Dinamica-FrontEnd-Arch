import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { RiAdminFill } from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome size={25} />,
    cName: 'nav-text'
  },
  {
    title: 'Manutenção de usuários',
    path: '/manutencao/user',
    icon: <IoIcons.IoMdPeople size={25}/>,
    cName: 'nav-text'
  },
  {
    title: 'Relatórios administrativos',
    path: '#',
    icon: <RiAdminFill size={25}/>,
    cName: 'nav-text'
  },
  {
    title: 'Manutenção de conteúdos',
    path: '/manutencao/content',
    icon: <IoIcons.IoIosPaper size={25}/>,
    cName: 'nav-text'
  },
  {
    title: 'Manutenção de eventos',
    path: '/manutencao/event',
    icon: <FaIcons.FaEnvelopeOpenText size={25}/>,
    cName: 'nav-text'
  },
  {
    title: 'Manutenção de serviços',
    path: '#',
    icon: <IoIcons.IoMdHelpCircle size={25}/>,
    cName: 'nav-text'
  }
];