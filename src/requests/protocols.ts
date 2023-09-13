import {
  TCreateProtocol,
  TProtocolListResponse,
  TUpdateProtocol,
} from '@/types/Protocol'
import { LIST_REGISTERS_PER_PAGE } from '@/utils/consts'

const mockedData = {
  totalRegisters: 15,
  protocols: [
    {
      id: 1,
      situation_id: 1,
      requestor: 'Mocked Name',
      phone: '915999999',
      postalCode: '9715-183',
      street: 'Mocked Street',
      number: '999',
      neighborhood: 'Mocked Neighborhood',
      city: 'Mocked City',
      description: 'Mocked Description',
      is_available: true,
      created_at: new Date(),
    },
    {
      id: 2,
      situation_id: 1,
      requestor: 'Mocked Name',
      phone: '915999999',
      postalCode: '9715-183',
      street: 'Mocked Street',
      number: '999',
      neighborhood: 'Mocked Neighborhood',
      city: 'Mocked City',
      description: 'Mocked Description',
      is_available: true,
      created_at: new Date(),
    },
    {
      id: 3,
      situation_id: 1,
      requestor: 'Mocked Name',
      phone: '915999999',
      postalCode: '9715-183',
      street: 'Mocked Street',
      number: '999',
      neighborhood: 'Mocked Neighborhood',
      city: 'Mocked City',
      description: 'Mocked Description',
      is_available: true,
      created_at: new Date(),
    },
    {
      id: 4,
      situation_id: 1,
      requestor: 'Mocked Name',
      phone: '915999999',
      postalCode: '9715-183',
      street: 'Mocked Street',
      number: '999',
      neighborhood: 'Mocked Neighborhood',
      city: 'Mocked City',
      description: 'Mocked Description',
      is_available: true,
      created_at: new Date(),
    },
    {
      id: 5,
      situation_id: 1,
      requestor: 'Mocked Name',
      phone: '915999999',
      postalCode: '9715-183',
      street: 'Mocked Street',
      number: '999',
      neighborhood: 'Mocked Neighborhood',
      city: 'Mocked City',
      description: 'Mocked Description',
      is_available: true,
      created_at: new Date(),
    },
  ],
}

export async function getProtocolList(
  page: number,
): Promise<TProtocolListResponse> {
  console.log('Get protocol list action: ', {
    page,
    take: LIST_REGISTERS_PER_PAGE,
  })
  return {
    list: mockedData.protocols,
    count: mockedData.totalRegisters,
  }
}

export async function getProtocol(id: number) {
  console.log('Get protocol action: ', { id })
  return mockedData.protocols[0]
}

export async function createProtocol(formValues: TCreateProtocol) {
  console.log('Create protocol action: ', { values: formValues })
  return mockedData.protocols[0]
}

export async function updateProtocol(id: number, formValues: TUpdateProtocol) {
  console.log('Update protocol action: ', { id, values: formValues })
  return mockedData.protocols[0]
}

export async function deleteProtocol(id: number) {
  console.log('Delete protocol action: ', { id })
  return mockedData.protocols[0]
}
