// Copyright (C) 2012-2024 Zammad Foundation, https://zammad-foundation.org/

import type { PersonalSettingPlugin } from '../../../components/PersonalSettingSidebar/types.ts'

export default <PersonalSettingPlugin>{
  label: __('Devices'),
  category: {
    label: __('Security'),
    order: 9000,
  },
  route: {
    path: 'devices',
    name: 'PersonalSettingDevices',
    component: () => import('../../PersonalSettingDevices.vue'),
    level: 2,
    meta: {
      title: __('Devices'),
      requiresAuth: true,
      requiredPermission: 'user_preferences.language',
    },
  },
  order: 9000,
  keywords: __('session,sessions,computer,computers,browser,browsers,access'),
}