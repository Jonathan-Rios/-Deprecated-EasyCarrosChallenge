import React, { FormEvent, useEffect, useState } from 'react';

import DatePicker, { DayValue } from 'react-modern-calendar-datepicker';
import { Main, Form, Board, Header, Fields, Buttons, Table } from './styles';

import DeleteBtn from '../../assets/delete-icon.svg';
import FinishBtn from '../../assets/finish-icon.svg';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import { customCalendar } from '../utils/calendar';

interface IService {
  service_name: string;
  execution_date: string;
  appointment_date: string;
  car_plate: string;
}

const Dashboard: React.FC = () => {
  const [serviceName, setServiceName] = useState('');
  const [appointmentDate, setAppointmentDate] = React.useState<DayValue>(null);
  const [carPlate, setCarPlate] = useState('');

  const [services, setServices] = useState<IService[]>(() => {
    const storagedRepositoriies = localStorage.getItem(
      '@Jon-EasyCarros:services',
    );

    if (storagedRepositoriies) {
      return JSON.parse(storagedRepositoriies);
    }
    return [];
  });

  useEffect(() => {
    // Adicionei o "Jon-", caso outro desenvolvedor já tenha utilizao desse padrão.
    localStorage.setItem('@Jon-EasyCarros:services', JSON.stringify(services));
  }, [services]);

  async function handleDeleteService(plate: string): Promise<void> {
    setServices(services.filter((service, _) => service.car_plate !== plate));
  }

  async function handleFinishService(plate: string): Promise<void> {
    const today = new Date();
    const formattedData = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`;

    const alteredServices = services.map(service =>
      service.car_plate === plate
        ? { ...service, execution_date: formattedData }
        : service,
    );

    setServices(alteredServices);
  }

  function formFilter(service: IService): boolean {
    let validForm = true;

    if (!service.service_name) {
      validForm = false;
      alert('Informe o nome do serviço.');
    }

    if (!service.appointment_date) {
      validForm = false;
      alert('Informe uma data de agendamento.');
    }

    if (!service.car_plate) {
      validForm = false;
      alert('Informe a placa do veículo.');
    }

    return validForm;
  }

  async function handleAddService(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const service = {
      service_name: serviceName,
      execution_date: '---',
      appointment_date: parsedDate(appointmentDate),
      car_plate: carPlate,
    };

    if (!formFilter(service)) return;

    setServices([...services, service]);

    setServiceName('');
    setAppointmentDate(null);
    setCarPlate('');
  }

  function parsedDate(date: any): string {
    if (!appointmentDate) return '';

    const parsedDay = date.day.toString().padStart(2, 0);
    const parsedMonth = date.month.toString().padStart(2, 0);

    return `${parsedDay}/${parsedMonth}/${date.year}`;
  }

  return (
    <Main>
      <Form onSubmit={handleAddService}>
        <Header>
          <strong>Nova ordem de serviço</strong>
          <p>Os campos com * são obrigatórios</p>
        </Header>
        <Fields>
          <input
            value={serviceName}
            className="large-field"
            type="text"
            placeholder="Serviço*"
            onChange={e => setServiceName(e.target.value)}
          />
          <DatePicker
            inputPlaceholder="Data de Agendamento*"
            value={appointmentDate}
            onChange={setAppointmentDate}
            locale={customCalendar}
            calendarClassName="medium-field"
            formatInputText={() => parsedDate(appointmentDate)}
          />
          <input
            value={carPlate}
            className="medium-field"
            type="text"
            placeholder="Placa*"
            onChange={e => setCarPlate(e.target.value)}
          />
        </Fields>
        <Buttons>
          <button className="cancel-btn" type="button">
            Cancelar
          </button>
          <button className="add-btn" type="submit">
            Adicionar
          </button>
        </Buttons>
      </Form>
      <Board>
        <Table>
          <thead>
            <tr>
              <th className="first">Serviço</th>
              <th>Data de Execução</th>
              <th>Data de Agendamento</th>
              <th className="last" colSpan={2}>
                Placa
              </th>
            </tr>
          </thead>
          <tbody>
            {services &&
              services.map(service => (
                <tr key={service.car_plate}>
                  <td className="service-text">{service.service_name}</td>
                  <td>{service.execution_date}</td>
                  <td>{service.appointment_date}</td>
                  <td className="plate-text">{service.car_plate}</td>
                  <td>
                    <div className="actions">
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDeleteService(service.car_plate)}
                      >
                        <img src={DeleteBtn} alt="Delete Service" />
                        Excluir
                      </button>
                      <button
                        type="button"
                        className="finish-btn"
                        onClick={() => handleFinishService(service.car_plate)}
                      >
                        <img src={FinishBtn} alt="Finish Service" />
                        Finalizar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Board>
    </Main>
  );
};

export default Dashboard;
