import * as _ from 'underscore';

export class AppModalService {
  private modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    const modalToRemove = _.findWhere(this.modals, { id: id });
    this.modals = _.without(this.modals, modalToRemove);
  }

  open(id: string) {
    // open modal specified by id
    const modal = _.findWhere(this.modals, { id: id });
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    const modal = _.find(this.modals, { id: id });
    modal.close();
  }
}
