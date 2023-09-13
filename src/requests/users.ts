import { TCreateUser, TUpdateUser, TUsersListResponse } from '@/types/User'
import { LIST_REGISTERS_PER_PAGE } from '@/utils/consts'

const mockedData = {
  totalRegisters: 15,
  users: [
    {
      id: 1,
      name: 'Mocked Name',
      email: 'mocked@mail.com',
      admin: false,
      active: true,
      created_at: new Date(),
    },
    {
      id: 2,
      name: 'Mocked Name',
      email: 'mocked@mail.com',
      admin: false,
      active: true,
      created_at: new Date(),
    },
    {
      id: 3,
      name: 'Mocked Name',
      email: 'mocked@mail.com',
      admin: false,
      active: true,
      created_at: new Date(),
    },
    {
      id: 4,
      name: 'Mocked Name',
      email: 'mocked@mail.com',
      admin: false,
      active: true,
      created_at: new Date(),
    },
    {
      id: 5,
      name: 'Mocked Name',
      email: 'mocked@mail.com',
      admin: false,
      active: true,
      created_at: new Date(),
    },
  ],
}

export async function getUserList(page: number): Promise<TUsersListResponse> {
  console.log('Get user list action: ', {
    page,
    take: LIST_REGISTERS_PER_PAGE,
  })
  return {
    list: mockedData.users,
    count: mockedData.totalRegisters,
  }
}

export async function getUser(id: number) {
  console.log('Get user action: ', { id })
  return mockedData.users[0]
}

export async function createUser(formValues: TCreateUser) {
  console.log('Create user action: ', { values: formValues })
}

export async function updateUser(id: number, formValues: TUpdateUser) {
  console.log('Update user action: ', { id, values: formValues })
  return mockedData.users[0]
}

export async function deleteUser(id: number) {
  console.log('Delete user action: ', { id })
  return mockedData.users[0]
}
