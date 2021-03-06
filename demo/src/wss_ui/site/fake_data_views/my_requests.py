from django.http import JsonResponse
from django.views import View

from .data.fake_data_loader import get_fake_date

my_requests = {"count": 5, "next": None, "previous": None,
               "results": [
                 {"id": 18,
                  "user": {"id": 2, "indexno": "08838291",
                           "username": "princy.lunawat",
                           "first_name": "Princy",
                           "last_name": "LUNAWAT",
                           "email": "princy.lunawat@wfp.org"},
                  "date_of_submit": "2017-09-26",
                  "current_status": "supervisor_acknowledge",
                  "module_class": "HR044", "info": {
                   "status": [{"current": 0, "state": "", "steps": 0}], "url": "/HR044/hr044/18/detail/",
                   "actions": {"default": "", "others": []}, "details": [], "type": "Leave Application",
                   "id": "HR-000018"},
                  "history": [{"user": {"id": 2,
                                        "indexno": "08838291",
                                        "username": "princy.lunawat",
                                        "first_name": "Princy",
                                        "last_name": "LUNAWAT",
                                        "email": "princy.lunawat@wfp.org"},
                               "transition": "submit",
                               "timestamp": "2017-09-26T10:05:07.173450Z"}]},
                 {"id": 13,
                  "user": {"id": 2, "indexno": "08838291",
                           "username": "princy.lunawat",
                           "first_name": "Princy",
                           "last_name": "LUNAWAT",
                           "email": "princy.lunawat@wfp.org"},
                  "date_of_submit": "2017-09-19",
                  "current_status": "closed",
                  "module_class": "HR044", "info": {"status": [
                   {"current": 0, "state": "", "steps": 0}],
                   "url": "/HR044/hr044/13/detail/",
                   "actions": {
                     "default": "",
                     "others": []},
                   "details": [],
                   "type": "Leave Application",
                   "id": "HR-000013"},
                  "history": [{"user": {"id": 2,
                                        "indexno": "08838291",
                                        "username": "princy.lunawat",
                                        "first_name": "Princy",
                                        "last_name": "LUNAWAT",
                                        "email": "princy.lunawat@wfp.org"},
                               "transition": "submit",
                               "timestamp": "2017-09-19T07:20:28.817975Z"},
                              {"user": {"id": 8,
                                        "indexno": "08800504",
                                        "username": "maurizio.blasilli",
                                        "first_name": "Maurizio",
                                        "last_name": "BLASILLI",
                                        "email": "maurizio.blasilli@wfp.org"},
                               "transition": "supervisor_approve",
                               "timestamp": "2017-09-19T07:23:45.867329Z"}]},
                 {"id": 21,
                  "user": {"id": 2, "indexno": "08838291",
                           "username": "princy.lunawat",
                           "first_name": "Princy",
                           "last_name": "LUNAWAT",
                           "email": "princy.lunawat@wfp.org"},
                  "date_of_submit": "2017-09-26",
                  "current_status": "supervisor_acknowledge",
                  "module_class": "HR044", "info": {"status": [
                   {"current": 0, "state": "", "steps": 0}],
                   "url": "/HR044/hr044/21/detail/",
                   "actions": {
                     "default": "",
                     "others": []},
                   "details": [],
                   "type": "Leave Application",
                   "id": "HR-000021"},
                  "history": [{"user": {"id": 2,
                                        "indexno": "08838291",
                                        "username": "princy.lunawat",
                                        "first_name": "Princy",
                                        "last_name": "LUNAWAT",
                                        "email": "princy.lunawat@wfp.org"},
                               "transition": "submit",
                               "timestamp": "2017-09-26T12:33:06.167450Z"},
                              {"user": {"id": 2,
                                        "indexno": "08838291",
                                        "username": "princy.lunawat",
                                        "first_name": "Princy",
                                        "last_name": "LUNAWAT",
                                        "email": "princy.lunawat@wfp.org"},
                               "transition": "recall",
                               "timestamp": "2017-09-26T12:33:17.128281Z"},
                              {"user": {"id": 2,
                                        "indexno": "08838291",
                                        "username": "princy.lunawat",
                                        "first_name": "Princy",
                                        "last_name": "LUNAWAT",
                                        "email": "princy.lunawat@wfp.org"},
                               "transition": "submit",
                               "timestamp": "2017-09-26T12:33:35.860202Z"}]},
                 {"id": 23,
                  "user": {"id": 2, "indexno": "08838291",
                           "username": "princy.lunawat",
                           "first_name": "Princy",
                           "last_name": "LUNAWAT",
                           "email": "princy.lunawat@wfp.org"},
                  "date_of_submit": "2017-09-27",
                  "current_status": "completed",
                  "module_class": "GiftDeclaration", "info": {
                   "status": [
                     {"current": 0, "state": "", "steps": 0}],
                   "url": "/Gift%20Declaration/giftdeclaration/23/detail/",
                   "actions": {"default": "", "others": []},
                   "details": [], "type": "Gift Declaration",
                   "id": "ETH-000023"}, "history": [{"user": {
                   "id": 2, "indexno": "08838291",
                   "username": "princy.lunawat",
                   "first_name": "Princy", "last_name": "LUNAWAT",
                   "email": "princy.lunawat@wfp.org"},
                   "transition": "complete",
                   "timestamp": "2017-09-27T08:13:58.696244Z"}]},
                 {"id": 24,
                  "user": {"id": 2, "indexno": "08838291",
                           "username": "princy.lunawat",
                           "first_name": "Princy",
                           "last_name": "LUNAWAT",
                           "email": "princy.lunawat@wfp.org"},
                  "date_of_submit": "2017-09-27",
                  "current_status": "completed",
                  "module_class": "GiftDeclaration", "info": {
                   "status": [
                     {"current": 0, "state": "", "steps": 0}],
                   "url": "/Gift%20Declaration/giftdeclaration/24/detail/",
                   "actions": {"default": "", "others": []},
                   "details": [], "type": "Gift Declaration",
                   "id": "ETH-000024"}, "history": [{"user": {
                   "id": 2, "indexno": "08838291",
                   "username": "princy.lunawat",
                   "first_name": "Princy", "last_name": "LUNAWAT",
                   "email": "princy.lunawat@wfp.org"},
                   "transition": "complete",
                   "timestamp": "2017-09-27T08:27:33.439679Z"}]}]}


class MyRequestsJSON(View):
  def get(self, request, *args, **kwargs):
    page_number = request.GET.get('page', '1')
    return JsonResponse(get_fake_date("my_requests_{}".format(page_number)))

